import React from "react";
import { render, act, screen } from "@testing-library/react";
import axios from "axios";
import Search from "./Search";
import userEvent from "@testing-library/user-event";

jest.mock('axios');


    test('fetch api stories  and error', async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error('Error Jaringan'))
        );
        render(<Search />);

        await act(async () => {
            await userEvent.click(screen.getByRole('button'));
        })

        const alert = await screen.findByText(/Ada yang error .../);

        expect(alert).toBeInTheDocument();

    });
