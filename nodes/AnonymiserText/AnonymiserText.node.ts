import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AnonymiserText implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Anonymiser Text',
        name: 'anonymiserText',
        icon: 'file:anonymisertext.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={$parameter["operation"]}',
        description: 'Perform anonymiser text operations in n8n',
        defaults: {
            name: 'Anonymiser Text',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'anonymiserTextApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute the anonymisation action',
                        action: 'Execute action',
                    },
                ],
                default: 'execute',
            },
        ],
    };
}
