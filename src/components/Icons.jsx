
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaShareFromSquare } from "react-icons/fa6";


function Icons(){
    return(
        <>
        <ul className="icons">
            <li>
                <div className="thumbsUp">
                    <FaThumbsUp />
                </div></li>
            <li>
                <div className="thumbsDown">
                    <FaThumbsDown />
                </div>
            </li>
            <li>
                <div className="rotate">
                    <FaArrowsRotate />
                </div>
            </li>
            <li>
                <div className="share">
                    <FaShareFromSquare />
                </div>
            </li>
        </ul>
    
    </>
    );

}
export default Icons