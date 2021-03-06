import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFTimeWidgetSchema } from './schema';
export declare class TimeWidget extends ControlUIWidget<SFTimeWidgetSchema> implements OnInit {
    private valueFormat;
    displayValue: Date | null;
    i: any;
    ngOnInit(): void;
    reset(value: SFValue): void;
    _change(value: Date | null): void;
}
