import React, { Component } from "react"
import { connect } from "react-redux"
import { uploadPhoto } from "../actions/uploadPhoto"
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";



class UploadPhoto extends Component { 
    constructor() {
        super()
        this.state = {
            cameraPhoto: "",
            file: "",
            userId: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        if (e.target.files[0]) {
        this.setState({
            file: e.target.files[0],
            userId: this.props.routerProps.match.params.id
        })
        }
    }

    handlePhoto = data => {
        this.setState({
            cameraPhoto: data,
            userId: this.props.routerProps.match.params.id
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        let formData = new FormData(); 
        formData.append('file', this.state.file)  
        formData.append('user_id', this.state.userId)
        formData.append('camera', this.state.cameraPhoto)
        
        this.props.uploadPhoto(formData)
        .then(() => {
            this.props.routerProps.history.push(`/my-profile/${this.props.routerProps.match.params.id}`)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input
                    id="upload"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={this.handleChange}
                />
                <Camera
                    onTakePhoto={this.handlePhoto}
                    isImageMirror={false}
                />
                <input
                    type="submit"
                    value="Upload"
                />
                </form>
            </div>
        )
    }
}


export default connect(null, { uploadPhoto })(UploadPhoto)

















// let uploadPhotoInput = document.getElementById("upload")

// if (uploadPhotoInput.files[0]) {
      // let fileData = uploadPhotoInput.files[0]