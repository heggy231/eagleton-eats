
import { connect } from 'react-redux';

const Greeting = ({ userName }) => {
     return <h1>Hello {userName}</h1>
}


const mapStateToProps = state => ({
    userName: state.userName
});


export default connect(mapStateToProps)(Greeting);