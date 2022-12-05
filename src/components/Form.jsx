import React, {useState} from "react";
 

const Form = () => {
    const [player, setPlayer] = useState('');
    return (
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <label htmlFor="breed">Breed:</label>
                <input type="text" name="breed" />
                <button type="submit">Submit</button>
            </form>
    </div>
    )
}
export default Form;