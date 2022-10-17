package pl.com.bard.model;

public class Joke {
    private Long jokeId;
    private String joke;

    public Joke(String joke) {
        this.joke = joke;
    }

    public Long getId() {
        return jokeId;
    }

    public void setId(Long id) {
        this.jokeId = id;
    }

    public String getJoke() {
        return joke;
    }

    public void setJoke(String joke) {
        this.joke = joke;
    }
}
