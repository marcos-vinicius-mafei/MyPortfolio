import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ControlButtons from "../ControlButtons";


/**
 * Renders the ControlButtons component when the user scrolls down a certain distance.
 *
 * @param {number} presenceDistance - The distance in pixels that the user needs to scroll down to trigger the rendering of the ControlButtons component.
 * @return {JSX.Element} The ControlButtons component wrapped in an AnimatePresence component.
 */
const ControlButtonsPresence = ({presenceDistance = 500}) => {

    const [distance, setDistance] = useState(0);

    useEffect(() => {
        const handleScroll = () => setDistance(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <AnimatePresence>{distance >= presenceDistance && <ControlButtons />}</AnimatePresence>
    )
}

export default ControlButtonsPresence;