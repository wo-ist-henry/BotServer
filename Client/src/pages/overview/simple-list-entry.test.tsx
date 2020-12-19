import {render, screen} from "@testing-library/react";
import SimpleListEntry from "./simple-list-entry";

describe('SimpleListEntry', () => {
    it('Title and content will be rendered in their container', () => {
        const title = 'Title';
        const content = 'content';

        render(<SimpleListEntry title={title} content={content}/>);

        const titleElem = screen.queryByTestId('Simple-List-Entry--title');
        const contentElem = screen.queryByTestId('Simple-List-Entry--content');

        expect(titleElem).toBeInTheDocument();
        expect(contentElem).toBeInTheDocument();

        expect(titleElem).toHaveTextContent(title);
        expect(contentElem).toHaveTextContent(content);
    });

    it('If the content is left empty, there will be a placeholder text instaed', () => {
        render(<SimpleListEntry title="Foo" content={undefined}/>);

        const titleElem = screen.queryByTestId('Simple-List-Entry--title');
        const contentElem = screen.queryByTestId('Simple-List-Entry--content');

        expect(titleElem).toBeInTheDocument();
        expect(contentElem).toBeInTheDocument();

        expect(titleElem).toHaveTextContent('Foo');
        expect(contentElem).toHaveTextContent(/^Es wurde keine genauere Beschreibung hinterlegt.$/);
    });
});
