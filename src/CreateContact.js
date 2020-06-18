import React from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import { useForm } from "react-hook-form";

function onSubmitForm(formData) {
  alert(formData.name + formData.handle);
}

const CreateContact = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <Link className="close-create-contact" to="/">
        Close
      </Link>
      <form
        className="create-contact-form"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <ImageInput
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={64}
        />
        <div className="create-contact-details">
          <input type="text" name="name" ref={register} placeholder="Name" />
          <input
            type="text"
            name="handle"
            ref={register}
            placeholder="Handle"
          />
          <input type="submit" value="Add Contact" />
        </div>
      </form>
    </div>
  );
};

export default CreateContact;
