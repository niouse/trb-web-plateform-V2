import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TipToolClocks_MocksWrapper(location) {
    return (WrappedComponent) => {
        class $TipToolClocks_MocksWrapper extends Component {
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
						location={location}
					/>
				)
            }
        }
        $TipToolClocks_MocksWrapper.propTypes = {

        };
        return $TipToolClocks_MocksWrapper
    }
}
