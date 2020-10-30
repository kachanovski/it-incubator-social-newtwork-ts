import React from 'react';
import s from './ProfileInfo.module.css'
import {Field, reduxForm} from "redux-form";
import {InputForm, validate} from "../../../utils/validators/validators";

const ProfileInfoForm = (props: any) => {


    return (
        <div className={s.profileInfo}>
            <form onSubmit={props.handleSubmit}>
                <div className={s.title}>
                    <b>fullName:</b> <Field placeholder='fullName' component={InputForm} name={'fullName'}/>
                </div>
                <div className={s.title}>
                    <b>About Me:</b> <Field placeholder={'aboutMe'} component={InputForm} name={'aboutMe'}/>
                </div>
                <div className={s.title}>
                    <b>lookingForAJob: </b> <Field placeholder={'lookingForAJob'} component={'input'} type={'checkbox'}
                                                  name={'lookingForAJob'}/>
                </div>
                <div className={s.title}>
                    <b>lookingForAJobDescription:</b>
                        <Field placeholder={'lookingForAJobDescription'}
                               component={InputForm}
                               name={'lookingForAJobDescription'}/>
                </div>
                <b className={s.title}>Contacts:</b>
                {props.error && <span> {props.error} </span>}
                <div className={s.title}>
                    <b>instagram:</b> <Field placeholder={'instagram'} component={InputForm}
                                             name={'contacts.instagram'}/>
                </div>
                <div className={s.title}>
                    <b>vk:</b> <Field placeholder={'vk'} component={InputForm} name={'contacts.vk'}/>
                </div>
                <div className={s.title}>
                    <b>facebook:</b> <Field placeholder={'facebook'} component={InputForm} name={'contacts.facebook'}/>
                </div>
                <div className={s.title}>
                    <b>github:</b> <Field placeholder={'github'} component={InputForm} name={'contacts.github'}/>
                </div>

                <button>set</button>
            </form>
        </div>
    );
}


export default reduxForm({
    form: 'profileInfo',
    validate: validate,
})(ProfileInfoForm)

