
import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function App_Api(appList) {
    return (WrappedComponent) => {
        class $App_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					childToRender : appList.TrbLabDashBoard,
					links : Object.keys(appList).map((item, index)=>{return {name : item, active : (item === "TrbLabDashBoard")}})
				}
            }
            componentDidMount() {
				window.addEventListener("resize", ()=>{
					this.props.stylesOptionsNext()
				})
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

			
			setRenderChild(childName){
				let newLinks = this.state.links.slice()
				newLinks = newLinks.map((item)=>{return {name : item.name, active : (item.name === childName)} })
				
				this.setState({
					childToRender : appList[childName],
					links : newLinks
				})
			}

            render() {
                return <WrappedComponent
				{...this.props}
				childToRender={this.state.childToRender}
				links={this.state.links}
				setRenderChild={(childName)=>this.setRenderChild(childName)}
				/>
            }
        }
        $App_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $App_Api
    }
}
    