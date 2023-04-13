import { render, screen, fireEvent } from "@testing-library/react";
import Todo from './index'


describe("Todo testleri", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });

    test('Varsayılan olarak verilen 3 nesne render edilmeli', () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    })

    test("Input ve Button bulunuyor mu?", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test('Inputa string girilip butona basılınca listeye eklenmeli', () => {
        //inputu doldur
        const name ="Mehmet";
        fireEvent.change(input, { target: { value: name } });
        //butona tıkla
        fireEvent.click(button);
        //kontrol assertion
        expect(screen.getByText(name)).toBeInTheDocument();
    })
 })
