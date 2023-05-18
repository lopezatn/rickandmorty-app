import React, { useState } from 'react';

const RegistrationForm = () => {
    
    return (
        <form>
            <h2>Register in to access rick'n'morty app</h2>
            <label>
                Name:
                <input 
                    type="text"
                    value=""
                />
            </label>
        </form>
    );
}

export default RegistrationForm;