
import React, {Component} from 'react';
import PropTypes from 'prop-types';



export default function CoolSelect_Template(IconButton, $TabHover) {
    return (wrappedComponent) => {
        const $CoolSelect_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="cool-select-container" className="container" style={styles.container}>
					<div style={styles.itemGrid} id="myCarousel" data-carousel-3d>
					{props.items.map((item, index)=>{
						return (
							<div  
								key={index} 
								style={styles.tab} 
								onClick={()=>props.goToPageNext(item.url)}>
								<$TabHover 
									id={'tab'+index}
									nameId={'name'+index}
									item={item}
									tabUrl={item.tabUrl}
								/>
							</div>
						)
					})}

					</div>
					<div style={styles.pointsBox}>
						<img 
							src="/cool-select/trb/leftArrow.png"  
							style={styles.arrow} 
							{...styles.arrow.attrLeft} 
							onClick={(e)=>props.prevApp(e)}
							/>
						{props.items.map((item, index)=>{
							let pointId = "point"+index
							return (
							<div 
								key={index}
								className="point"
								id={pointId}
								onClick={(event)=>props.rotate(event, index, pointId)}
								style={styles.point}
								{...styles.point.attr}
							>
							 </div>
							)
						})}
						<img 
							style={styles.arrow} 
							{...styles.arrow.attrRight} 
							src="/cool-select/trb/rightArrow.png" 
							onClick={(e)=>props.nextApp(e)}
							/>
					</div>
				</div>
            );
        }
        $CoolSelect_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			items : PropTypes.array.isRequired,
        };
        return $CoolSelect_Template
    }
}
    