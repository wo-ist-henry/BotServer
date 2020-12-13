import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons/faClock";
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";

export type ValideIcons = 'check-circle' | 'clock' | 'at';

const IconTextToFAIcon = new Map<ValideIcons, IconDefinition>([
    ['check-circle', faCheckCircle],
    ['clock', faClock],
    ['at', faAt],
]);

// Wrapper class for Icons
export default function WoIstHenryIcon(props: { icon: ValideIcons }) {
    const faIcon = IconTextToFAIcon.has(props.icon) ? IconTextToFAIcon.get(props.icon) : undefined;
    return (
        <FontAwesomeIcon icon={faIcon || ['fas', 'bug']}/>
    )
}
