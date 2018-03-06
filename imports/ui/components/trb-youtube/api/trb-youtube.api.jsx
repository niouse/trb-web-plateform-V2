
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbYoutube_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbYoutube_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					category : props.categoryList[0],
					categoryList : props.categoryList,
					youtubeList : props.youtubeList,
					videoSize : "250"
				}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            setCategory(event, index, value) {
                this.setState({
					youtubeList : this.props.youtubeList.filter((video)=>{
						return video.category.indexOf(value)!== -1 || value === "all"
					}),
					category : value
				})
            }
			
			setVideoSize(size){
				this.setState({
					videoSize : size
				})
			}

            render() {
                return <WrappedComponent
				{...this.props}
				setCategory={(event, index, value)=>this.setCategory(event, index, value)}
				category={this.state.category}
				youtubeList={this.state.youtubeList}
				setVideoSize={(size)=>this.setVideoSize(size)}
				videoSize={this.state.videoSize}
				/>
            }
        }
        $TrbYoutube_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbYoutube_Api
    }
}
    