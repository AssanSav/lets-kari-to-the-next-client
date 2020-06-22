import React, { Component } from "react"
import { connect } from "react-redux"
import { uploadPhoto } from "../actions/uploadPhoto"
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Button} from "react-bootstrap"



class UploadPhoto extends Component { 
    constructor() {
        super()
        this.state = {
            cameraPhoto: "",
            file: "",
            userId: "",
            isCameraVisible: false,
            inputFile: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.showCamera = this.showCamera.bind(this)
    }


    showCamera(e) {
        this.setState(prevState =>({
            isCameraVisible: !prevState.isCameraVisible
        }))
    }

    handleChange(e) {
        if (e.target.files[0]) {
        this.setState({
            file: e.target.files[0],
            userId: this.props.routerProps.match.params.id,
            inputFile: URL.createObjectURL(e.target.files[0])
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
            <div className="upload-photo">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="file" id="file" />
                    <label for="file" >choose a file</label>

                    {this.state.isCameraVisible &&
                        <Camera
                            onTakePhoto={this.handlePhoto}
                            isImageMirror={false}/>
                    } <br />
                    
                    {!this.state.isCameraVisible ?
                        <Button variant="outline-primary" onClick={this.showCamera}>
                            Camera
                        </Button> :
                        <Button variant="outline-secondary" onClick={this.showCamera}>
                            Hide Camera
                        </Button>} <br /> <br />
                    
                    <img src={this.state.inputFile} alt={this.state.inputFile} />

                    <Button variant="outline-success" type="submit" value="Upload">
                        Upload
                    </Button>
                </form>
            </div>
        )
    }
}


export default connect(null, { uploadPhoto })(UploadPhoto)














