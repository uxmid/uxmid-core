export * from "./application";
export * from "./broadcast";
export * from "./collections";
export * from "./commands";
export * from "./common";
export * from "./diagnostics";
export * from "./events";
export * from "./exceptions";
export * from "./io";
export * from "./reflection";
export * from "./runtime";
export * from "./security";
export * from "./services";

import * as application from "./application";
import * as broadcast from "./broadcast";
import * as collections from "./collections";
import * as commands from "./commands";
import * as common from "./common";
import * as diagnostics from "./diagnostics";
import * as events from "./events";
import * as exceptions from "./exceptions";
import * as io from "./io";
import * as reflection from "./reflection";
import * as runtime from "./runtime";
import * as security from "./security";
import * as services from "./services";

const uxmid =
{
    application,
    broadcast,
    collections,
    commands,
    common,
    diagnostics,
    events,
    exceptions,
    io,
    reflection,
    runtime,
    security,
    services
};

export default uxmid;
