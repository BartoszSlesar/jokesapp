package pl.com.bard.services;

import guru.springframework.norris.chuck.ChuckNorrisQuotes;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Primary
@Service
public class ChuckNorrisJokeService implements JokeService {
    @Override
    public String getJoke() {

        return new ChuckNorrisQuotes().getRandomQuote();
    }
}
