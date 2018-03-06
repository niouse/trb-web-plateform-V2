import { Subject } from 'rxjs/Subject';

import React, { Component } from 'react';

var trbMapApiSource = new Subject();		
const trbMapApiObs = trbMapApiSource.asObservable();

export default function TrbMap_Api_Service(){
	return (WrappedComponent) => {
		
		let trbMapApiSub;
		
		const trbMapApiNext = (msg) => {
			trbMapApiSource.next(msg)
		}
		
		class $TrbMap_Api_Service extends Component {
			constructor(props) {
				super(props)
			}	
			componentDidMount(){
				trbMapApiSub = trbMapApiObs.subscribe((x)=>{
					
				})
			}

			componentWillUnmount(){
				trbMapApiSub.unsubscribe()
			}

			render (){
				return <WrappedComponent
					{...this.props}
					trbMapApiObs = {trbMapApiObs}
					trbMapApiNext = {trbMapApiNext}
					/>
			}	
		}
		return $TrbMap_Api_Service
	}
}