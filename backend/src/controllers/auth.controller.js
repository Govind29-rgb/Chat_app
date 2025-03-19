export const signup = (req, res) => {
    try{
        const {fullName,email,passowrd}=req.body
        

    }
    catch (error){

    }
};

export const login = (req, res) => {
    res.send("login route");
};

export const logout = (req, res) => {
    res.send("logout route");
};
