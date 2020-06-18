import React from "react"
import { connect } from "react-redux"
import {Link} from "react-router-dom"


const MyProfile = (props) => {
  
    if (!props.user )  {
        return <div></div>
    }
  else {
        const {id, age, image, username, city, gender, orientation, ethnicity, height, body_shape, children, relationship, education, bio } = props.user
    
    return (
        <div className="wraper">
            <h2>
            {username}
            </h2>
            <img src={image} alt="" />
            <Link to={`/upload-photos/${id}`}>
            Upload Image
            </Link>
            <h2>Bio</h2>
            <p>
            {bio}
            </p>
            <br></br> <br></br>
            <table className="table">
                <tbody>
                    <tr>
                    <td>City: {city}</td>
                    <td>Age: {age} </td>
                    </tr>
                    <tr>
                    <td>Gender: {gender} </td>
                    <td>Orientation: {orientation}</td>
                    </tr>
                    <tr>
                    <td>Relationship: {relationship}</td>
                    <td>Children: {children}</td>
                    </tr>
                    <tr>
                    <td>Height: {height}</td>
                    <td>Body Shape: {body_shape}</td>
                    </tr>
                    <tr>
                    <td>Ethnicity: {ethnicity}</td>
                    <td>Education: {education}</td>
                    </tr>
                </tbody> 
            </table>
            <h3>Interests:</h3>
            <h2>
            {props.interests.map(int => <span key={int.id}>{int.name}&nbsp; </span>)} 
            </h2> 
            <Link  to={`/edit-profile/${props.user.id}`}>
                <button className="edit-profile">
                    Edit Profile
                </button> 
            </Link>
        </div>
    )
  }
}



const mapStateToProps = ({ usersReducer, interestsReducer }) => {
    return {
        user: usersReducer.user,
        interests: interestsReducer.interests
    }
}

export default connect(mapStateToProps, null)(MyProfile)