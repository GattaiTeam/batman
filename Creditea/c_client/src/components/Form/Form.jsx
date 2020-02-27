import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IframeComm from "react-iframe-comm";
import logo from "../../media/logo.png";
//import GattaiFrame from '../Iframe/Iframe';


import {
    Field,
    Control,
    Label,
    Input,
    Checkbox,
    Select
  } from 'react-bulma-components/lib/components/form';
  import {toast} from 'react-toastify';


  const GattaiFrame = ({}) => {

      // the html attributes to create the iframe with
      // make sure you use camelCase attribute names
      const attributes = {
          src: 'http://localhost:4000',
          width: "100%",
          height: "175",
          frameBorder: 1, // show frame border just for fun...
      };

      // the postMessage data you want to send to your iframe
      // it will be send after the iframe has loaded
      const postMessageData = "hello iframe";

      // parent received a message from iframe
      const onReceiveMessage = (event) => {
          //console.log("onReceiveMessage")
          //https://stackoverflow.com/questions/25098021/securityerror-blocked-a-frame-with-origin-from-accessing-a-cross-origin-frame
          console.log(event)

      };

      // iframe has loaded
      const onReady = () => {
          console.log("onReady");
      };

      return (
          <IframeComm
              attributes={attributes}
              postMessageData={postMessageData}
              handleReady={onReady}
              handleReceiveMessage={onReceiveMessage}
          />
      );
  };

class Form extends React.Component {






    state = {
        ...this.props.initialState,
    };

    dateToShow = new Date();


    isLoading = false;

    fields = this.props.fields;

    renderSelectOptions = opts => (
        Object.entries(opts).map(o => (
            <option key={o[0]} value={o[0]}>{o[1]}</option>
        ))
    )

    handleFocus = event => event.target.select();

    renderSingleField = field => {
        switch(field.type) {
            case 'select':
                return (
                    <Select
                        name={field.key}
                        onChange={this.onChange}
                        value={this.state[field.key]}
                    >
                        <option value=''>Select...</option>
                        {
                            field.options &&
                            this.renderSelectOptions(field.options)
                        }
                    </Select>
                );
            case 'checkbox':
                return (<Checkbox
                    {...field}
                    name={field.key}
                    onChange={this.onChange}
                    checked={this.state.active_flag}
                >
                    {field.label}
                </Checkbox>);
            default:
                return (<Input
                        {...field}
                        name={field.key}
                        onChange={this.onChange}
                        value={this.state[field.key]}
                    />)
        }
    }

    renderFields = fields => {
        return fields.map(field => {
        const isCheckbox = field.type === 'checkbox';
            return (
                <Field key={`field-${field.key}`}>
                    {   !isCheckbox &&
                        <Label>{field.label}</Label>
                    }
                    <Control>
                        {this.renderSingleField(field)}
                    </Control>
                </Field>
            )
        });
    }

    onChange = evt => {
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        this.setState({
          [evt.target.name]: value,
        });
    };

    validate = () => {
        const keys = Object.entries(this.props.initialState).map(e => e[0]);
        let isValid = true;
        for (let i = 0; i < keys.length; i++) {
            if (!this.state[keys[i]]) {
                if (typeof this.state[keys[i]] === "number" && this.state[keys[i]] === 0) {
                    break;
                }

                isValid = false;
                toast.warn('All fields are required');
                break;
            }
        }

        // To prevent duplicate alert
        if (!isValid) return isValid;

        const {
            shouldNotExist,
        } = this.props;

        if (shouldNotExist) {
            for (let j = 0; j < shouldNotExist.length; j++) {
                if (Object.entries(this.fbCollection).find(record => record[1][shouldNotExist[j]] === this.state[shouldNotExist[j]])) { // if exists
                    isValid = false;
                    toast.warn(`Field: ${shouldNotExist[j]} can't be duplicated`);
                    break;
                }
            }
        }

        return isValid;
    }

    save = () => {
        this.props.onSave && this.props.onSave(this.state);
    }

    render() {
        return (
            <div>
                {
                    this.state.returnToCollection &&
                    this.renderRedirect()
                }
                <Container className={'pad-und-md fb-form'}>
                    <Columns>
                        <Columns.Column size='half' offset='one-quarter'>
                            <Columns>
                                <Columns.Column>
                                    <img src={logo} className="logo" alt="Creditea" />
                                </Columns.Column>

                                <Columns.Column style={{textAlign: 'center'}}>
                                    <GattaiFrame> </GattaiFrame>
                                </Columns.Column>


                                <Columns.Column size={12}>
                                    {this.renderFields(this.fields)}
                                <Field>
                                <Control>

                                </Control>
                                </Field>
                                </Columns.Column>
                                <Columns.Column size='half'>
                                    <Button className='solid' onClick={this.save}>Save</Button>
                                </Columns.Column>
                                <Columns.Column style={{textAlign: 'center'}}>
                                    {this.props.after}
                                </Columns.Column>
                            </Columns>
                        </Columns.Column>
                    </Columns>
                </Container>
            </div>
        )
    }
}

export default Form;
