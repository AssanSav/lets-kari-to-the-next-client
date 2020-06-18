import React, { Component } from "react"
import { connect } from "react-redux"
import { sessionStatus } from '../actions/sessionStatus';
import NavBar from "../components/NavBar";


class SessionStatus extends Component {

    componentDidMount() {
        this.props.sessionStatus()
    }

    render() {
        if (this.props) {
            const { status, user } = this.props
            return (
                <div>
                    <NavBar status={status} user={user} />
                </div>
            )
        }
    }
}


const mapStateToProps = ({ usersReducer }) => {
    return {
        status: usersReducer.status,
        user: usersReducer.user
    }
}
export default connect(mapStateToProps, { sessionStatus })(SessionStatus)