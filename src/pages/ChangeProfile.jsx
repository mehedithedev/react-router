import { useState , useContext} from "react"
import { AppContext } from "../App";
import PropTypes from "prop-types";

const ChangeProfile = () => {
    const {setUserName}= useContext(AppContext)
    const [newUserName, setNewUserName] = useState("");
    return (
        <div>
            <input onChange={(event) => setNewUserName(event.target.value)} />
            <button onClick={() => setUserName(newUserName)}>Change username</button>
        </div>
    );
};

ChangeProfile.propTypes = {
    setUserName: PropTypes.func.isRequired,
};

export default ChangeProfile;
