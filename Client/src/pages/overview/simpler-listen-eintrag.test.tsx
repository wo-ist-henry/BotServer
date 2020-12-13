import {render, screen} from "@testing-library/react";
import SimplerListenEintrag from "./simpler-listen-eintrag";

describe('Simpler Listeneintrag', () => {
    // Wird zu 100% bald mit mehr Parametern erweitert, daher schonmal mit it.each vorbereitet.
    it.each`
        titel     | inhalt      | testText
        
        ${'Test'} | ${'Inhalt'} | ${'Sowohl der Titel, als auch Inhalt werden in den vorgesehenen Containern gerendert'}
    `('$testText', ({titel, inhalt}) => {
        render(<SimplerListenEintrag titel={titel} inhalt={inhalt} icon="''" status="aktuell"/>);

        const titelElem = screen.queryByTestId('Simpler-Listen-Eintrag--titel');
        const inhaltElem = screen.queryByTestId('Simpler-Listen-Eintrag--inhalt');

        expect(titelElem).toBeInTheDocument();
        expect(inhaltElem).toBeInTheDocument();

        expect(titelElem).toHaveTextContent(titel);
        expect(inhaltElem).toHaveTextContent(inhalt);
    });

    it('Wenn der Inhalt leer gelassen wird, wird ein Standard-Text angezeigt', () => {
        render(<SimplerListenEintrag titel="Foo" inhalt={undefined} icon="''" status="aktuell"/>);

        const titelElem = screen.queryByTestId('Simpler-Listen-Eintrag--titel');
        const inhaltElem = screen.queryByTestId('Simpler-Listen-Eintrag--inhalt');

        expect(titelElem).toBeInTheDocument();
        expect(inhaltElem).toBeInTheDocument();

        expect(titelElem).toHaveTextContent('Foo');
        expect(inhaltElem).toHaveTextContent(/^Es wurde keine genauere Beschreibung hinterlegt.$/);
    });

    // TODO: Status Test
});
