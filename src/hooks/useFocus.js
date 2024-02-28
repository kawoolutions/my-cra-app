import { useEffect, useRef } from "react";

export default function useFocus() {
    console.log("useFocus");
    const ref = useRef();

    useEffect(() => {
        console.log("useEffect");
        ref.current.focus();
    }, []);

    return ref;
}