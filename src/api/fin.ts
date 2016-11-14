import Transport from "../transport/transport"
import { Bare } from "./base"
import System from "./system/system"
import _WindowModule from "./window/window"
import Application from "./application/application"
import InterApplicationBus from "./interappbus/interappbus"
import _Notification from "./notification/notification"

export default class Fin extends Bare {
    System: System
    Window: _WindowModule
    Application: Application
    InterApplicationBus: InterApplicationBus
    Notification: _Notification
    constructor(wire: Transport, public token: Token) {
        super(wire)
        this.System = new System(wire)
        this.Window = new _WindowModule(wire)
        this.Application = new Application(wire)
        this.InterApplicationBus = new InterApplicationBus(wire)
        this.Notification = new _Notification(wire)
    }
}