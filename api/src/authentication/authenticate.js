import bcrypt from 'bcryptjs';

export default userRepository => async (email, password) => {
    const foundUser = await userRepository.findByEmail(email);

    if (!foundUser || !bcrypt.compareSync(password, foundUser.password)) {
        return false;
    }

    return {
        id: foundUser.id,
        email: foundUser.email,
    };
};
