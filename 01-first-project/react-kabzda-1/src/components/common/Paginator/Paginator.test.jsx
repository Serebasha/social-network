import React from 'react';
import {create} from 'react-test-renderer';
import Paginator from "./Paginator";

describe('Paginator component test', () => {
    test('pages count is 11 but should be showed only 10', () => {
        const components = create(<Paginator totalItemsCount={11} pageSixe={1} portionSize={10}/>);
        const root = components.root;
        let span = root.findAllByType('span');
        expect(span.length).toBe(10);
    })

    test('if pages count is more then 10 button NEXT should be present', () => {
        const components = create(<Paginator totalItemsCount={11} pageSixe={1} portionSize={10}/>);
        const root = components.root;
        let button = root.findAllByType('button');
        expect(button.length).toBe(1);
    })
})