import styled from "styled-components"
import { motion } from "framer-motion";

const Item = ({key,variants,children}) => {
  return (
    <motion.li
      key={key}
      variants={variants}
      transition={{ duration: 0.5}}
    >{children}</motion.li>
  );
};


export default Item