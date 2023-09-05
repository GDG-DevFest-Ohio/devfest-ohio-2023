import Image from 'next/image'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/rangle.webp'
import Link from 'next/link'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative px-4 py-20 -mx-4 overflow-hidden bg-indigo-50 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative grid max-w-2xl grid-cols-1 mx-auto gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="text-4xl font-medium tracking-tighter text-blue-900 font-display sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Get updates on all of our events and be the first to get
                notified when tickets go on sale.
              </p>
            </div>
            <div id="mc_embed_shell">
                <Link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css"></Link>

              <div id="mc_embed_signup">
                  <form action="https://ohiodevfest.us21.list-manage.com/subscribe/post?u=9f939fb05b23eb3b1794dd7d1&amp;id=0c54d6d5d2&amp;f_id=0030e0e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                        <div class="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div class="mc-field-group">
                          <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                          <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></input>
                        </div>
                        <div id="mce-responses" class="clear foot">
                            <div class="response" id="mce-error-response" className="hidden"></div>
                            <div class="response" id="mce-success-response" className="hidden"></div>
                        </div>
                        <div aria-hidden="true" className="invisible ">
                            <input type="text" name="b_9f939fb05b23eb3b1794dd7d1_0c54d6d5d2" tabindex="-1" value="" ></input>
                        </div>
                    </div>
                </form>
              </div>
          </div>

            {/* <form
              action="https://ohiodevfest.us21.list-manage.com/subscribe/post?u=9f939fb05b23eb3b1794dd7d1&amp;id=0c54d6d5d2&amp;f_id=0030e0e6f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank">
              <label fpr="mce-EMAIL" className="text-lg font-semibold tracking-tight text-blue-900">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </label>
              <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  value=""
                  placeholder="Email address"
                  aria-label="Email address"
                  className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Sign up today</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="w-6 h-6" />
                  </span>
                </Button>
              </div>
            </form> */}
          </div>
        </div>
      </Container>
    </section>
  )
}
