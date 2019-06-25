/*!
 * This file is part of `services` module. 
 * 
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Uxmid Inc. All rights reserved. 
 */

import { assert } from "chai";
import { WorkerBase, WorkerStateChangedEventArgs } from "dist/uxmid";
// import Type = uxmid.Type;
// import IWorker = uxmid.IWorker;
// import WorkerBase = uxmid.WorkerBase;
// import WorkerStateChangedEventArgs = uxmid.WorkerStateChangedEventArgs;

export default class BroadcastWorker extends WorkerBase
{
    public constructor()
    {
        super("broadcast");
    }
    
    /**
     * 当工作器启动时调用。
     * @protected
     * @override
     * @param  {Array<string>} ...args
     * @returns void
     */
    protected onStart(...args: Array<string>): any
    {
        // todo
    }
    
    /**
     * 当工作器停止时调用。
     * @protected
     * @override
     * @param  {Array<string>} ...args
     * @returns void
     */
    protected onStop(...args: Array<string>): any
    {
        // todo
    }

    /**
     * 当工作器状态发生改变时调用。
     * @protected
     * @override
     * @param  {WorkerStateChangedEventArgs} args 事件参数。
     * @returns void
     */
    protected onStateChanged(args: WorkerStateChangedEventArgs): void
    {
        // todo
    }
}
