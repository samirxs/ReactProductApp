import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import NavigationMenu from "./NavigationMenu";

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const masktransitions = useTransition(showMenu, null, {
        from: { position: "absolute", opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const menutransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: "translateX(-100%)" },
        enter: { opacity: 1, transform: "translateX(0)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
    });

    // menu className="fixed bg-white top-0 left-0 h-full w-3/5 z-50 shadow"
    // menuMask className="fixed bg-black-t-50 w-full h-full top-0 left-0 z-50"

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {masktransitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div
                            key={key}
                            style={props}
                            className="fixed bg-black-t-50 w-full h-full top-0 left-0 z-50"
                            onClick={() => setShowMenu(false)}
                        ></animated.div>
                    )
            )}
            {menutransitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div
                            key={key}
                            style={props}
                            className="fixed bg-white top-0 left-0 h-full w-4/5 z-50 shadow p-3"
                        >
                        <NavigationMenu closeMenu = {() => setShowMenu(false)} />
                        </animated.div>
                    )
            )}
        </nav>
    );
}

export default Navigation;
