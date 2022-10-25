import React, { Fragment, useContext, useState } from "react";
import { PostsContext } from "../../contexts/posts.context";
import { UserContext } from "../../contexts/user.context";
import FormInput from "../form-input/form-input.component";
import { NewPostFormContainer, NewPostPageContainer } from "./new-post-form.styles";

const NewPostForm = () => {
	const { currentUser } = useContext(UserContext);
	const defaultInputs = {
		title: "",
		text: "",
        image:null,
	};
	const { createNewPost } = useContext(PostsContext);
	const [inputs, setInputs] = useState(defaultInputs);

	const handleSubmitNewPost = (event) => {
		event.preventDefault();
		setInputs(defaultInputs);
		createNewPost(inputs);
	};
	const handleChange = (e) => {
        
		const { value, name } = e.target;
        console.log(e.target.files);

		setInputs({ ...inputs, [name] : value});
	};
    const handleFileChange=(e)=>{
        setInputs({...inputs,image:e.target.files[0]});
    }

	return (

		<NewPostPageContainer>
			<h1>Create new post!</h1>
			<NewPostFormContainer>
				<form onSubmit={handleSubmitNewPost}>
					<FormInput
						label="Title"
						type="text"
						onChange={handleChange}
						name="title"
						value={inputs.title}
					/>
					<FormInput
						label="Text"
						type="text"
						additionalTypes="text-area"
						onChange={handleChange}
						name="text"
						value={inputs.text}
					/>
                    <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    />
					<button type="submit">create new post</button>
				</form>
			</NewPostFormContainer>
		</NewPostPageContainer>
	);
};

export default NewPostForm;