import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function CoolSelect_MocksWrapper(items) {
    return (WrappedComponent) => {
        class $CoolSelect_MocksWrapper extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            render() {
                return( 
					<WrappedComponent
						{...this.props}
						items={items}
						itemsList={items}
					/>
				)
            }
        }
        $CoolSelect_MocksWrapper.propTypes = {

        };
        return $CoolSelect_MocksWrapper
    }
}