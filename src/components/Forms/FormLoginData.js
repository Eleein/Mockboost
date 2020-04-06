import React, {useState} from "react";

export function FormLoginData() {
    const [fields, setFields] = useState({ userName: "", password: "" });
    const [isInfoAvailable, setIsInfoAvailable] = useState(false);

    function updateUserFields(event) {
        // statePropertyName = "userName"
        const statePropertyName = event.target.id;
        const value = event.target.value; // value = fields.userName

        setFields(prevFields => {
            return {
                ...prevFields,
                // ["userName"]: value
                // userName: value
                // console.log(fields.userName)
                // fields.userName = "Bob"
                // fields["userName"] = "Bob"
                [statePropertyName]: value
            };
        });
    }
    function showInformation() {
        setIsInfoAvailable(!isInfoAvailable);
    }
    function clearInformation() {
        // Make sure that the information is hidden
        setIsInfoAvailable(false);

        // Clear the information
        setFields({ userName: "", password: "" })
    }

    return (
        <div>
            <form>
                <label>
                    Name:{" "}
                    <input
                        id="userName"
                        value={fields.userName}
                        onChange={updateUserFields}
                    />
                </label>
                <label>
                    Password:{" "}
                    <input
                        type="password"
                        id="password"
                        value={fields.password}
                        onChange={updateUserFields}
                    />
                </label>

                <button type="button" onClick={showInformation}>
                    Show Login Information
                </button>
                <button    onClick={clearInformation} type="button">
                    clear
                </button>
            </form>
            <div>
                Login Information:{isInfoAvailable && <span>{fields.password} {fields.userName}</span>}
            </div>
        </div>
    );
}