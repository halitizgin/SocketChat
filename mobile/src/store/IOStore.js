import {observable, action} from 'mobx';

class IOStore{
    @observable io = null;
    @observable ip = '192.168.x.x'; //Ip adresi yanlış olursa çalışmaz.

    @action setIO = (socket) => {
        this.io = socket;
    }
}

export default new IOStore();