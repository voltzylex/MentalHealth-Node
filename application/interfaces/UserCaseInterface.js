class UserCaseInterface{
    async execute() {
        throw new Error("Method Not Implemented");
    }
}
module.exports = UserCaseInterface;
class PlayGame extends UserCaseInterface{
    
}