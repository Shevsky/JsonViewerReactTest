// tslint:disable
import * as React from 'react';
import { JsonSchemaViewer } from '@stoplight/json-schema-viewer';

const schema = {
    title: 'User',
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description:
                "The user's full name. This description can be long and should truncate once it reaches the end of the row. If it's not truncating then theres and issue that needs to be fixed. Help!"
        },
        age: {
            type: 'number',
            minimum: 0,
            maximum: 150,
            multipleOf: 10,
            exclusiveMinimum: true,
            exclusiveMaximum: true
        },
        completed_at: {
            type: 'string',
            format: 'date-time'
        },
        items: {
            type: ['null', 'array'],
            items: {
                type: ['string', 'number']
            },
            description:
                "This description can be long and should truncate once it reaches the end of the row. If it's not truncating then theres and issue that needs to be fixed. Help!"
        },
        email: {
            type: 'string',
            format: 'email',
            example: 'email@email.com',
            deprecated: true,
            minLength: 2
        },
        plan: {
            anyOf: [
                {
                    type: 'object',
                    properties: {
                        foo: {
                            type: 'string'
                        },
                        bar: {
                            type: 'string'
                        }
                    },
                    deprecated: false,
                    example: 'hi',
                    required: ['foo', 'bar']
                },
                {
                    type: 'array',
                    items: {
                        type: 'integer'
                    }
                }
            ]
        },
        permissions: {
            type: ['string', 'object'],
            properties: {
                ids: {
                    type: 'array',
                    items: {
                        type: 'integer'
                    }
                }
            }
        },
        ref: {
            $ref: '#/definitions/error-response'
        }
    },
    patternProperties: {
        '^id_': { type: 'number' },
        foo: { type: 'integer' },
        _name$: { type: 'string' }
    },
    required: ['name', 'age', 'completed_at']
};
function Fallback() {
    return <>fallback</>;
}
export function Test() {
    return (
        <div style={{ width: '100%', height: '800px', border: '2px solid green' }}>
            <JsonSchemaViewer
                name={'name'}
                schema={schema as any}
                defaultExpandedDepth={2}
                expanded={true}
                hideTopBar={false}
                emptyText="empty text"
                onGoToRef={console.log}
                FallbackComponent={Fallback}
            />
        </div>
    );
}
