import React from 'react';
import s from './ProfileInfo.module.css'
import {Field, reduxForm} from "redux-form";
import {InputForm, validate} from "../../../utils/validators/validators";

const ProfileInfoContactsForm = (props: any) => {


    return (
        <div className={s.profileInfo}>
                Contacts:
                <form>
                    <div className={s.title}>
                        instagram: <Field placeholder={'instagram'} component={InputForm} name={'contacts.instagram'}/>
                    </div>
                    <div className={s.title}>
                        vk: <Field placeholder={'vk'} component={InputForm} name={'contacts.vk'}/>
                    </div>
                    <div className={s.title}>
                        facebook: <Field placeholder={'facebook'} component={InputForm} name={'contacts.facebook'}/>
                    </div>
                    <div className={s.title}>
                        github: <Field placeholder={'github'} component={InputForm} name={'contacts.github'}/>
                    </div>
                </form>
        </div>
    );
}


export default reduxForm({
    form: 'profileInfoContacts',
    validate: validate
})(ProfileInfoContactsForm)

