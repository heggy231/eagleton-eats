
import { connect } from 'react-redux';

const Greeting = ({ userName }) => {
     return <h1>Meow {userName} you pathetic human.</h1>
}


const mapStateToProps = state => ({
    userName: state.userName
});


export default connect(mapStateToProps)(Greeting);