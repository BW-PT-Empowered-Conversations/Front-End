import React from 'react';

function Dashboard(props) {
    console.log(props);
    return (
        <div>
            Hello from the Dashboard!
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
    userInfo: {
        ...state.userInfo
        }
    }
}

export default connect(mapStateToProps)(Dashboard);