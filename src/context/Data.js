import React, { useState } from 'react';

const Data = React.createContext([{}, () => {}]);

const FormProvider = ({ children }) => {
    const [sentRequest, setSentRequest] = useState(false);

    return (
        <Data.Provider value={[sentRequest, setSentRequest]}>{children}</Data.Provider>
       
    );
};

export { FormProvider, Data };
