import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'

const Notifications = (props) => {
    const { notifications } = props;
    console.log(notifications)
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="online-users">
              { notifications && notifications.map(item =>{
                return <li key={item.id}>
                  <span className="pink-text">{item.person} </span>
                  <span>{item.content}</span>
                
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  const mapStateToProps = (state) => {
    console.log(state);
    return {

      notifications: state.firestore.ordered.notifications
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notifications', limit: 3}
    ])
  )(Notifications)




