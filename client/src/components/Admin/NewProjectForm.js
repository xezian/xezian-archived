import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { CREATE_PROJECT_MUTATION } from './gql';
import Form from './Form';

class NewProjectForm extends Component {
  state = {
    title: '',
    link: '',
    repo: '',
    description: '',
    img: '',
    image: '',
    img2: '',
    image2: '',
    img3: '',
    image3: ''
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  uploadFile = async e => {
    const files = e.target.files;
    const { name } = e.target;
    let namelg = '';
    switch (name) {
      case 'img':
        namelg = 'image';
        break;
      case 'img2':
        namelg = 'image2';
        break;
      case 'img3':
        namelg = 'image3';
        break;
      default:
        break;  
    }
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'xezian');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/xezian/image/upload',
      {
        method: 'POST',
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      [name]: file.secure_url,
      [namelg]: file.eager[0].secure_url
    });
    console.log(this.state);
  };
  redirect = id => {
    this.props.history.push(`/project/${id}`);
  };
  render() {
    return (
      <Mutation mutation={CREATE_PROJECT_MUTATION} variables={this.state}>
        {(createProject, { loading, error }) => (
          <>
            <h4>Add A Project:</h4>
            <Form
              onSubmit={async e => {
                // stop form from submitting
                e.preventDefault();
                // call mutation
                const res = await createProject();
                // go to single project page
                await this.redirect(res.data.createProject.id);
              }}
            >
              {error && <div>{error}</div>}
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="img">
                  Image
                  <input
                    type="file"
                    id="img"
                    name="img"
                    namelg="image"
                    placeholder="Upload an Image"
                    onChange={this.uploadFile}
                  />
                  {this.state.img && (
                    <img
                      style={{ width: 'auto', height: '80px' }}
                      src={this.state.img}
                      alt="upload  preview"
                    />
                  )}
                </label>
                <label htmlFor="img2">
                  Image 2
                  <input
                    type="file"
                    id="img2"
                    name="img2"
                    namelg="image2"
                    placeholder="Upload an Image"
                    onChange={this.uploadFile}
                  />
                  {this.state.img2 && (
                    <img
                      style={{ width: 'auto', height: '80px' }}
                      src={this.state.img2}
                      alt="upload  preview"
                    />
                  )}
                </label>
                <label htmlFor="img3">
                  Image 3
                  <input
                    type="file"
                    id="img3"
                    name="img3"
                    namelg="image3"
                    placeholder="Upload an Image"
                    onChange={this.uploadFile}
                  />
                  {this.state.img3 && (
                    <img
                      style={{ width: 'auto', height: '80px' }}
                      src={this.state.img3}
                      alt="upload  preview"
                    />
                  )}
                </label>
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    required
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="description">
                  Description
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                    required
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="link">
                  URL
                  <input
                    type="text"
                    id="link"
                    name="link"
                    placeholder="link to project"
                    required
                    value={this.state.link}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="repo">
                  URL
                  <input
                    type="text"
                    id="repo"
                    name="repo"
                    placeholder="link to project repo"
                    required
                    value={this.state.repo}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          </>
        )}
      </Mutation>
    );
  }
}

export default withRouter(NewProjectForm);
