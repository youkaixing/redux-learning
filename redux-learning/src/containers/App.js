import React,{Component} from 'react'
import Picker from '../components/Picker'
import {connect} from 'react-redux'
class App extends Component{
    static propTypes = {

    }

    render(){

        const {selectedSubreddit} = this.props;
        return(
            <div >
                <Picker value={selectedSubreddit}
                    onChange = {this.handleChange}
                        options = {['reactjs','frontend']}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const {selectedSubreddit} = state;

    return {
        selectedSubreddit
    }
}

export default connect(mapStateToProps)(App)