import { Story, Meta } from '@storybook/angular/types-6-0';
import { AngJson2excelBtnComponent } from 'ang-json2excel-btn';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
    title: 'Example/Ang-json2excel-btn',
    component: AngJson2excelBtnComponent,
    decorators: [
        moduleMetadata({
            declarations: [AngJson2excelBtnComponent],
            imports: [CommonModule],
        }),
    ],
} as Meta;

const Template: Story<AngJson2excelBtnComponent> = (args: AngJson2excelBtnComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    json: [
        {
            "name": "John",
            "age": 30,
            "car": "Ford"
        },
        {
            "name": "Peter",
            "age": 40,
            "car": "BMW"
        },
        {
            "name": "Amy",
            "age": 50,
            "car": "Ford"
        }
    ],
    fileName: 'my-file-name'
};

export const Secondary = Template.bind({});
Secondary.args = {
    json: [
        {
            "name": "John",
            "age": 30,
            "car": "Ford"
        },
        {
            "name": "Peter",
            "age": 40,
            "car": "BMW"
        },
        {
            "name": "Amy",
            "age": 50,
            "car": "Ford"
        }
    ],
    fileName: 'my-file-name'
};

export const Success = Template.bind({});
Success.args = {
    json: [
        {
            "name": "John",
            "age": 30,
            "car": "Ford"
        },
        {
            "name": "Peter",
            "age": 40,
            "car": "BMW"
        },
        {
            "name": "Amy",
            "age": 50,
            "car": "Ford"
        }
    ],
    fileName: 'my-file-name'
};

export const Danger = Template.bind({});
Danger.args = {
    json: [
        {
            "name": "John",
            "age": 30,
            "car": "Ford"
        },
        {
            "name": "Peter",
            "age": 40,
            "car": "BMW"
        },
        {
            "name": "Amy",
            "age": 50,
            "car": "Ford"
        }
    ],
    fileName: 'my-file-name'
};

export const Warning = Template.bind({});
Warning.args = {
    json: [
        {
            "name": "John",
            "age": 30,
            "car": "Ford"
        },
        {
            "name": "Peter",
            "age": 40,
            "car": "BMW"
        },
        {
            "name": "Amy",
            "age": 50,
            "car": "Ford"
        }
    ],
    fileName: 'my-file-name'
};

export const Info = Template.bind({});
Info.args = {
    json: [
        {
            "name": "John",
            "age": 30,
            "car": "Ford"
        },
        {
            "name": "Peter",
            "age": 40,
            "car": "BMW"
        },
        {
            "name": "Amy",
            "age": 50,
            "car": "Ford"
        }
    ],
    fileName: 'my-file-name'
};

