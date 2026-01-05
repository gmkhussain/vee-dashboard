import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimateWrapper = ({children, IS_ENABLED_ANIMATE = true}) => {

    const animateToTop = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    };

    const location = useLocation();

    return IS_ENABLED_ANIMATE ? <>
    <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial="initial" animate="animate" exit="exit" variants={animateToTop}>
            {children}
        </motion.div>
    </AnimatePresence>
    </> : <>{children}</>
}

export default AnimateWrapper;